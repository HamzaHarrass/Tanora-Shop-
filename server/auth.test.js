const request = require('supertest');
// const app = require('./Controllers/AuthontificationControle'); 
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
