const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/getDailyNewUsers', async (req, res) => {
	try {
		const resp = await axios.get("https://pinlink.ai/api/auth/getDailyNewUsers")
		const { data } = resp;
		return res.send(data);
	} catch (e) {
		console.log(e)
	}
})

router.get('/stakingInfo', async (req, res) => {
	try {
		const resp = await axios.get("https://pinlink.ai/api/staking/info?records="+req.query.records)
		const { data } = resp;
		return res.send(data);
	} catch (e) {
		console.log(e)
	}
})

router.get('/nonce', async (req, res) => {
	try {
		const resp = await axios.get("https://pinlink.ai/api/nonce/"+req.query.address)
		const { data } = resp;
		return res.send(data);
	} catch (e) {
		console.log(e)
	}
})

router.get('/auth/checkWallet?walletAddress=', async (req, res) => {
	try {
		const resp = await axios.get("https://pinlink.ai/api/auth/checkWallet?walletAddress="+req.query.address)
		const { data } = resp;
		console.log(data)
		return res.send(data);
	} catch (e) {
		console.log(e)
	}
})

router.post('/auth/login', async (req, res) => {
	console.log(req.body)
	try {
		const resp = await axios.post("https://pinlink.ai/api/auth/login", req.body)
		const { data } = resp;
		console.log(data)
		return res.send(data);
	} catch (e) {
		console.log(e)
	}
})


module.exports = router