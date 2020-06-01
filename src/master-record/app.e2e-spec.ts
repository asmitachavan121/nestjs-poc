import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import 'jest-extended'
 

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const Id = Math.floor(Math.random() * 1000);
  let id
  beforeEach(async () => {
    
    jest.setTimeout(10000)

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

  });

  it('/ (GET)', async () => {
    return  await request(app.getHttpServer())
    // request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/ get all master-record', async () => {
   
     const res = await request(app.getHttpServer())
      .get('/master-record')
      .expect(200)
     expect(res.body).toBeArray()
     id = res.body[0].id
     console.log(id)
      // .expect('Hello World!');
    // }catch(err) {

    //   console.log(`error  in testing ${err}`)
    //   // If AlreadyHasActiveConnectionError occurs, return already existent connection
    // //   if (err.name === "AlreadyHasActiveConnectionError") {
    // //     const existentConn = getConnectionManager().get("default");
    // //     return existentConn;
    // //  }
    // }
   
  });
  it('/ POST master-record', async () => {

    // expect.assertions(2)

    const data = {
      "coeStatus": "Approved",
      "coeType": "studying",
      "providerStudentID": 345,
      "firstName": "Aisha",
      "familyName": "Douson",
      "gender": "Female",
      "dateOfBirth": "2000-04-05T00:00:00.000Z",
      "nationality": "US",
      "courseName": "dbms",
      "proposedStartDate": "2000-04-05T00:00:00.000Z",
      "proposedEndDate": "2004-04-05T00:00:00.000Z",
      "visaEffectiveDate": "2000-04-05T00:00:00.000Z",
      "enrolmentComments": "done",
      "locationName": "UK",
      "studentType": "Commencing",
      "lastChangedDateTime": "2020-05-21T05:09:26.445Z",
      "createDateTime": "2020-05-21T05:09:26.445Z"
    }
    
    // console.log(student)
    const res = await request(app.getHttpServer())
    // request(app.getHttpServer())
      .post('/master-record/upload')
      .set('Accept', 'application/json')
      .send(data)
      
      expect(res.status).toBe(201)

      // console.log(res.body)
      expect(res.body).toBeObject()
      // .expect('Hello World!');
  });

  it('/ POST master-record - inserting duplicate data expect conflict error statusCode - 409 ', async () => {
    expect.assertions(1)
    const student = {
      "id": id,
      "providerStudentID":Id,
      "coeStatus":"Studying",
      "coeType":"master",
      "firstName":"Radika",
      "familyName":"Deshmukh",
      "gender":"Female",
      "dateOfBirth":"2000-04-05",
      "nationality":"Indian",
      "courseName":"dbms",
      "proposedStartDate":"2000-04-05",
      "proposedEndDate":"2004-04-05",
      "visaEffectiveDate":"2000-04-05",
      "enrolmentComments":"JEE",
      "locationName":"Los Angeles",
      "studentType":"Commencing",
      "lastChangedDateTime":"2000-04-05",
      "createDateTime":"2000-04-05"
    }
    const res = await request(app.getHttpServer())
    // request(app.getHttpServer())
      .post('/master-record/upload')
      .set('Accept', 'application/json')
      .send(student)
      .expect(409)

      // console.log(res.body)
      expect(res.body).toBeDefined()
      // .expect('Hello World!');
  });

  it('/ POST master-record - inserting INVALID data expect Bad Request error statusCode - 400 ', async () => {

    expect.assertions(1)
    const student = {
      "id": Math.floor(Math.random() * 1000),
      "providerStudentID": Math.floor(Math.random() * 1000),
      "firstName":"Radika",
      "familyName":"Deshmukh",
      "gender":"Female",
      "dateOfBirth":"2000-04-05",
      "nationality":"Indian",
      "courseName":"dbms",
      "proposedStartDate":"2000-04-05",
      "proposedEndDate":"2004-04-05",
      "visaEffectiveDate":"2000-04-05",
      "enrolmentComments":"JEE",
      "locationName":"Los Angeles",
      "studentType":"Commencing",
      "lastChangedDateTime":"2000-04-05",
      "createDateTime":"2000-04-05"
    }
    const res = await request(app.getHttpServer())
    // request(app.getHttpServer())
      .post('/master-record/upload')
      .set('Accept', 'application/json')
      .send(student)
      .expect(400)

      // console.log(res.body)
      expect(res.body).toBeDefined()
      // .expect('Hello World!');
  });

  it('/ GET master-record with id - expect statusCode-200', async () => {

    // const Id = id
    const res = await request(app.getHttpServer())
    .get(`/master-record/${id}`)
    .expect(200)
    
    expect(res.body).toBeObject()

  } )
  it('/ DELETE Master record - expect statusCode-200', async () => {

    expect.assertions(1)

    // const id = Id
    const res = await request(app.getHttpServer())
    .delete(`/master-record/delete/${id}`)
    .expect(200)

    expect(res.status).toBe(200)

  })
  afterAll(async () => {
    await app.close();
  });
});
