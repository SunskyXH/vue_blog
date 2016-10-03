var express = require('express');
var app = express();
var bodyPraser = require('body-parser');
var morgan = require('morgan');

var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/blog';
var _db;

app.use(morgan('dev'));
app.use(bodyPraser.json());
app.use(express('dist'));

MongoClient.connect(mongoUrl, function (err, db) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('connected to mongo');
  _db = db;
  app.listen(8888, function () {
    console.log('server is running at localhost:8888 ...');
  });
});

app.all("*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
app.post('/create_article', function(req, res, next) {
  var article = req.body;
  var collection = _db.collection('articles');
  if(!article.content || !article.title || !article.date){
    res.send({
      errcode: -1,
      errmsg: "params missed"
    });
    return;
  }
  collection.insert({
    content: article.content,
    title: article.title,
    date: article.date,
    cat1: article.cat1,
    cat2: article.cat2,
    tags: article.tags,
    id: article.id
  }, function(err,ret) {
     if (err) {
       console.error(err);
       res.status(500).end();
     } else {
       res.send({
         errcode: 0,
         errmsg: "ok"
       })
     }
  });
});
app.post('/update_article/:id', function(req, res, next) {
  var article = req.body;
  var collection = _db.collection('articles');
  if(!article.content || !article.title || !article.date){
    res.send({
      errcode: -1,
      errmsg: "params missed"
    });
    return;
  }
  collection.update({'id':req.params.id},{
    $set:{
      content: article.content,
      title: article.title,
      date: article.date,
      cat1: article.cat1,
      cat2: article.cat2,
      tags: article.tags
    }
  }, function(err,ret) {
     if (err) {
       console.error(err);
       res.status(500).end();
      } else {
       res.send({
         errcode: 0,
         errmsg: "ok"
        })
      }
    });
});
app.post('/update_tags/:name', function(req, res, next) {
  var tag = req.body;
  var collection = _db.collection('tags');
  if(!tag.name || !tag.color) {
    res.send({
      errcode: -1,
      errmsg: "params missed"
    });
    return;
  }
  collection.update({'name':req.params.name},{
    $set:{
      name: tag.name,
      color: tag.color
    }
  }, function(err, ret) {
    if(err) {
      console.error(err);
      res.status(500).end();
    } else {
      res.send({
        errcode: 0,
        errmsg: "ok"
      })
    }
  });
});
app.get('/get_articles', function (req, res, next) {
  var collection = _db.collection('articles');
  collection.find({}).toArray(function (err, ret) {
    if (err) {
      console.error(err);
      return;
    }
    ret.reverse()
    res.json({
      errorcode: 0,
      errmsg: "ok",
      articles: ret
    });
  });
});
app.get('/get_articles/:id', function (req, res, next) {
  var collection = _db.collection('articles');
  collection.find({"id":req.params.id}).toArray(function (err, ret) {
    if (err) {
      console.log(err);
      return;
    }
    res.json({
      errorcode: 0,
      errmsg: "ok",
      article: ret
    })
  });
});
app.get('/get_tags', function(req, res, next) {
  var collection = _db.collection('tags');
  collection.find({}).toArray(function (err, ret) {
    if (err) {
      console.error(err);
      return;
    }
    res.json({
      errorcode:0,
      errmsg: "ok",
      tag: ret
    });
  });
});
app.get('/get_tags/:name', function (req, res, next) {
  var collection = _db.collection('tags');
  collection.find({"name":req.params.name}).toArray(function (err, ret) {
    if (err) {
      console.error(err);
      return;
    }
    res.json({
      errorcode:0,
      errmsg: "ok",
      tags:ret
    });
  });
});
app.get('/get_articles_tag/:name', function (req, res, next) {
  var collection = _db.collection('articles');
  collection.find({"tags":{$elemMatch:{"name":req.params.name}}}).toArray(function (err, ret) {
    if(err) {
      console.error(err);
      return;
    }
    ret.reverse()
    res.json({
      errotcode:0,
      errmsg: "ok",
      articles:ret
    })
  });
});
app.get('/get_info/tags', function (req, res, next) {
    var collection = _db.collection('tags');
    collection.find({}).toArray(function (err, ret) {
      if (err) {
        console.error(err);
        return;
      }
    res.json({
      errorcode: 0,
      errmsg: "ok",
      tagsNumber: ret.length
    });
  });
});
app.get('/get_info/articles', function (req, res, next) {
  var collection = _db.collection('articles');
  collection.find({}).toArray(function (err, ret) {
    if (err) {
      console.error(err);
      return;
    }
    res.json({
      errorcode: 0,
      errmsg: "ok",
      articlesNumber: ret.length
    });
  });
});
