
# Hivemind 

## Week 9 - NSCM

Welcome to Hivemind! This is an app to help Bootcampers capture information like links, articles and API addresses, organised by week studied and topic.


## How it works

It is created with React on the frontend. There is a 'createCard' component which captures all the relevant inputs. When clicking 'clickToSave' it will post the status on the database.

'displayCard' component will automatically fetch from the database. It will have sorted the cards by week and day. Bootcampers can 'delete' cards if they make an error or no longer need them.


## API Reference

#### Get all items

```http
  GET /api/cards
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `n/a` | `string` | `fetches all the cards` |

#### Post item

```http
  POST /api/cards
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `n/a`       | `string` |  `creates a new card` |

## Example of JSON data:

{
	"week": 1,
	"day": "Monday",
	"image": "http image address",
	"topic": ["Array", "of", "strings"],
	"ref:": ["Array", "of", "strings"]
}

#### Delete Card

```http
  DELETE /api/cards/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `:id`     | `string` | `deletes all the cards`      |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file


`DATABASE_URL = `
## FAQ

#### How should the database be set up?

Like this:
```
 CREATE TABLE cards (
   card_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
   week INTEGER,
   day TEXT,
   image TEXT,
   topic TEXT[],
   ref TEXT []
 );
 
 INSERT INTO cards (week,day,image,topic,ref)
 VALUES (1,'Monday', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDrv14j5EZe9Jw5AhYPhrWnWj15Ib933jgA&usqp=CAU', ARRAY['assignment oprerators'], ARRAY ['https://www.w3schools.com/js/js_assignment.asp']),
(1,'Tuesday', 'https://www.nicepng.com/png/detail/873-8732359_circus-clipart-roller-coaster-forces-roller-coaster-loop.png', ARRAY['for loops'], ARRAY ['https://www.w3schools.com/js/js_loop_for.asp']),
(1,'Thursday', 'https://thumbs.dreamstime.com/b/knife-spreading-butter-bread-margarine-slice-vector-illustration-67346415.jpg', ARRAY['spread operator'], ARRAY ['https://www.w3schools.com/react/react_es6_spread.asp']);
```



## Authors

- [@MarthaBennett](https://github.com/MarthaBennett)
- [@CSajan](https://github.com/csajan)
- [@Sunbearian](https://github.com/Sunbearian)
- [@NatashaChinea](https://github.com/natashachinea)


