const express = require('express');
const router  = express.Router();
const Question= require('../models/question');

router.get('/questions', (req, res) => {
    let queryObj = {};
    if (req.query.system) {
        queryObj.system = req.query.system
    }
    if (req.query.topic) {
        queryObj.topic = req.query.topic
    }
    if (req.query.type) {
        queryObj.type = req.query.type
    }

    Question.find(queryObj, (err, questions) => {
      if(err) {
          console.log(err);
      } else {
          res.json(questions);
      }
  }); 
});


router.get('/questions/add', (req, res)=> {
    res.render('addQuestions');
});

router.post('/questions/add', (req, res)=> {
    let newQuestion = new Question({
       stem: req.body.stem,
       ansChoice: req.body.answer,
       distractors: req.body.distractors.split(', '),
       system: req.body.system,
       topic: req.body.topic,
       type: req.body.type
    });
    newQuestion.save((err, question)=> {
        if(err) {
            console.log(err);
        } else {
            res.send('Question has been saved successfully!');
        }
    });
});

module.exports = router;