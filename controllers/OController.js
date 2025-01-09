const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
	try {
		return res.json('0:{"a":"$@1","f":"","b":"hMiFO0QGNmXAvekM9nnfN"}\n1:"gpt-4o-mini"');
	} catch (e) {
		console.log(e)
	}
})


module.exports = router