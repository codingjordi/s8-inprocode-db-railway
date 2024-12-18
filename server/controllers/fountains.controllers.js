import { pool } from "../db.js"

export const getFountains = async (req, res) => {
    try {
        const [result] = await pool.query(
            "SELECT * FROM drinking_fountains"
        )
        res.json(result)
        console.log(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

{/*

export const getFountainById = async (req, res) => {
    
    try {
        const [result] = await pool.query(
            "SELECT * FROM drinking_fountains WHERE ID = ?",
            [req.params.id]
        )
        console.log(result)
    
        if (result.length === 0) {
            return res.status(404).json({ message: "Fountain not found" })
        }

        res.send(result[0])
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const createFountain = async (req, res) => {
    try {
        const { title, description } = req.body
        const [result] = await pool.query(
            "INSERT INTO drinking_fountains(title, description) VALUES (?, ?)",
            [title, description]
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

export const updateFountain = async (req, res) => {
    try {
        const [result] = await pool.query(
            "UPDATE drinking_fountains SET ? WHERE id = ?",
            [req.body, req.params.id]
        )
        res.json(result)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const deleteFountain = async (req, res) => {

    try {
        const [result] = await pool.query("DELETE FROM drinking_fountains WHERE id = ?",
            [req.params.id]
        )
    
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Fountain not found" })
        }
    
        return res.sendStatus(204)
       
    } catch (error) {
        return res.status(500).json({ message: error.message })
    } 
}
    */}