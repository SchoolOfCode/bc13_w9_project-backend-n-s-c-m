import { pool } from "../db/db.js";

export async function getCards() {
	const data = await pool.query(
		"SELECT * FROM cards ORDER BY week, CASE WHEN day = 'Sunday' THEN 7 WHEN day = 'Monday' THEN 1 WHEN day = 'Tuesday' THEN 2 WHEN day = 'Wednesday' THEN 3 WHEN day = 'Thursday' THEN 4 WHEN day = 'Friday' THEN 5 WHEN day = 'Saturday' THEN 6 END ASC;"
	);
	return data.rows;
}

export async function createCards(newCard) {
	const data = await pool.query(
		"INSERT INTO cards (week,day,image,topic,ref) VALUES ($1,$2,$3,$4,$5) RETURNING *",
		[newCard.week, newCard.day, newCard.image, newCard.topic, newCard.ref]
	);
	return data.rows[0];
}
export async function deleteCard(id) {
	const data = await pool.query(
		"DELETE FROM cards WHERE card_id = $1 RETURNING *",
		[id]
	);
	return data.rows[0];
}
