const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/getDailyNewUsers', async (req, res) => {
	try {
		const resp = await axios.get("https://pinlink.ai/api/auth/getDailyNewUsers")
		const { data } = resp;
		console.log(data)
		return res.send(data);
	} catch (e) {
		console.log(e)
	}
})

router.get('/stakingInfo', async (req, res) => {
	try {
		const resp = await axios.get("https://pinlink.ai/api/staking/info?records="+req.query.records)
		const { data } = resp;
		console.log(data)
		return res.send(data);
	} catch (e) {
		console.log(e)
	}
})

router.get('/nonce', async (req, res) => {
	try {
		const resp = await axios.get("https://pinlink.ai/api/nonce/"+req.query.address)
		const { data } = resp;
		console.log(data)
		return res.send(data);
	} catch (e) {
		console.log(e)
	}
})
// router.post('/', async (req, res) => {
// 	try {
// 		return res.send('0:{"a":"$@1","f":"","b":"hMiFO0QGNmXAvekM9nnfN"}\n1:"gpt-4o-mini"');
// 	} catch (e) {
// 		console.log(e)
// 	}
// })


module.exports = router