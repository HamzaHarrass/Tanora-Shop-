const request = require('supertest');
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const User = require('./Models/User')
app.use(express.json());
app.use("/auth", require("./Routers/AuthontificationRouter"));

const mockedUser = User;
jest.mock("bcryptjs");
jest.mock("jsonwebtoken");


describe('Register Endpoint', () => {
  it('should verify fields', async () => {
    const userData = {
     
    };

    const res = await request(app)
      .post('/auth/register')
      .send(userData);

    expect(res.statusCode).toEqual(422);
    expect(res.body).toHaveProperty("errors");
    expect(Array.isArray(res.body.errors)).toBeTruthy();
  });

  it('should find the user exists', async () => {
    const userData = {
        nom: 'John',
        prenom: 'Doe',
        email: 'johndoe@example.com',
        password: 'password123'
    };
    mockedUser.findOne = jest.fn().mockResolvedValue({_id:'23456ert'})
    const res = await request(app)
      .post('/auth/register')
      .send(userData);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
    expect(res.body.message).toBe('User with this email already exists');
  });

  it('should register a new user', async () => {
    const userData = {
      nom: 'John',
      prenom: 'Doe',
      email: 'johndoe@example.com',
      password: 'password123'
    };
    mockedUser.findOne = jest.fn().mockResolvedValue(null)
      mockedUser.create = jest.fn().mockResolvedValue(userData)
      jwt.sign= jest.fn().mockResolvedValue('azerte23456TY')
      bcrypt.hash= jest.fn().mockResolvedValue('azerte23456TY')
    const res = await request(app)
      .post('/auth/register')
      .send(userData);
      
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('access_token');
    expect(res.body.user).toHaveProperty('nom', userData.nom);
    expect(res.body.user).toHaveProperty('prenom', userData.prenom);
    expect(res.body.user).toHaveProperty('email', userData.email);
  });

});


describe('Login Endpoint', () => {
    it('should verify fields', async () => {
      const userData = {};
  
      const res = await request(app)
        .post('/auth/login')
        .send(userData);
  
      expect(res.statusCode).toEqual(422);
      expect(res.body).toHaveProperty("errors");
      expect(Array.isArray(res.body.errors)).toBeTruthy();
    });
  
    it('should return "User not found" for non-existing user', async () => {
      const userData = {
        email: 'nonexistinguser@example.com',
        password: 'password123'
      };
  
      mockedUser.findOne = jest.fn().mockResolvedValue(null);
  
      const res = await request(app)
        .post('/auth/login')
        .send(userData);
  
      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe('User not found');
    });
  
    it('should return "Invalid password" for incorrect password', async () => {
      const userData = {
        email: 'existinguser@example.com',
        password: 'incorrectpassword'
      };
  
      mockedUser.findOne = jest.fn().mockResolvedValue({
        _id: '12345abc',
        email: 'existinguser@example.com',
        password: await bcrypt.hash('correctpassword', 10) // Ensure to hash the correct password
      });
  
      const res = await request(app)
        .post('/auth/login')
        .send(userData);
  
      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty("message");
      expect(res.body.message).toBe('Invalid password');
    });
  
    it('should login existing user and return access and refresh tokens', async () => {
      const userData = {
        email: 'existinguser@example.com',
        password: 'correctpassword'
      };
  
      const hashedPassword = await bcrypt.hash('correctpassword', 10); 

      mockedUser.findOne = jest.fn().mockResolvedValue({
        _id: '12345abc',
        email: 'existinguser@example.com',
        password: hashedPassword
      });
      bcrypt.compare= jest.fn().mockResolvedValue(true)
  
      jwt.sign = jest.fn().mockResolvedValue('token')
  
      const res = await request(app)
        .post('/auth/login')
        .send(userData);
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('user');
      expect(res.body.user._id).toBe('12345abc');
      expect(res.body.user.email).toBe('existinguser@example.com');
    });
  });

  describe('UserCount Endpoint', () => {
    it('should return the count of users with role "user"', async () => {
      const userCountData = 5; 
  
      User.countDocuments = jest.fn().mockResolvedValue(userCountData);
  
      const res = await request(app)
        .get('/auth/users/count'); 
  
      expect(res.status).toEqual(200);
      expect(res.body).toHaveProperty('userCount', userCountData);
    });
  
    it('should handle errors when getting user count', async () => {
      User.countDocuments = jest.fn().mockRejectedValue(new Error('Database error'));
  
      const res = await request(app)
        .get('/auth/users/count'); 
  
      expect(res.status).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Error counting users');
    });
  });
  
  