import { pool } from "./db.js";

async function createCardsTable() {
	return await pool.query(
		`CREATE TABLE IF NOT EXISTS cards (card_id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY, week INTEGER, day TEXT, image TEXT,topic TEXT[],ref TEXT []);`
	);
}

async function insertCardsTable() {
	return await pool.query(`INSERT INTO cards (week,day,image,topic,ref)
      VALUES (1,'Monday', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXDrv14j5EZe9Jw5AhYPhrWnWj15Ib933jgA&usqp=CAU', ARRAY['assignment oprerators'], ARRAY ['https://www.w3schools.com/js/js_assignment.asp']),
     (1,'Tuesday', 'https://www.nicepng.com/png/detail/873-8732359_circus-clipart-roller-coaster-forces-roller-coaster-loop.png', ARRAY['for loops'], ARRAY ['https://www.w3schools.com/js/js_loop_for.asp']),
     (1,'Thursday', 'https://thumbs.dreamstime.com/b/knife-spreading-butter-bread-margarine-slice-vector-illustration-67346415.jpg', ARRAY['spread operator'], ARRAY ['https://www.w3schools.com/react/react_es6_spread.asp']);
     `);
}

async function dropCardsTable() {
	return await pool.query("DROP TABLE IF EXISTS cards;");
}

async function resetCardsTable() {
	const drop = await dropCardsTable();
	const create = await createCardsTable();
	const insert = await insertCardsTable();
	return [drop, create, insert];
}
resetCardsTable();

export { createCardsTable, dropCardsTable, resetCardsTable };
