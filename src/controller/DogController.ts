import express, { Request, Response } from "express";
import DogModel from "../model/DogModel";

const DogController = express.Router();

DogController.get("/dog/health", (req: Request, res: Response) => {
  res.send("Welcome to the Dog API!");
});

DogController.post("/dog", async (req: Request, res: Response) => { 
  console.log(req.body);
  
  const dog = new DogModel();
  dog.id = req.body.id;
  dog.dogName = req.body.dogName;
  dog.breed = req.body.breed;
  dog.age = req.body.age;
  dog.ownerName = req.body.ownerName;
  dog.contactNumber = req.body.contactNumber;
  dog.address = req.body.address;

  await dog.save();
  res.send(dog);
});

DogController.get("/dog/nextId", async (req: Request, res: Response) => {
  try {
      const lastDog = await DogModel.findOne().sort({ id: -1 }).exec();
      let nextId;
        if (lastDog) {
            nextId = lastDog.id + 1;
        } else {
            nextId = 1;
    }
    res.send({ nextId: nextId });
  } catch (error) {
      res.status(500).send({ error: "An error occurred while fetching the last dog ID" });
  }

});

export default DogController;