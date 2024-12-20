import { pool } from '../db.js'

export const getGraphicData = async (req, res) => {
    try { 
        const [result] = await pool.query("SELECT * FROM financial_data")
        res.json(result)
        console.log(result)
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }
}
 