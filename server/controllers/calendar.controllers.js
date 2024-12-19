import { pool } from "../db.js"

export const getEvents = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM events"
        )
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}


export const createEvent = async (req, res) => {
    try {
        const { title, description, event_date } = req.body
        const [result] = await pool.query(
            "INSERT INTO events(title, description, event_date) VALUES (?, ?, ?)",
            [title, description, event_date]
        )
        res.json({
            id: result.insertId,
            title,
            description
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const deleteEvent = async (req, res) => {

    try {
        const [result] = await pool.query("DELETE FROM events WHERE id = ?",
            [req.params.id]
        )
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Event not found" })
        }
    
        return res.sendStatus(204)
       
    } catch (error) {
        return res.status(500).json({ message: error.message })
    } 
}