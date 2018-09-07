import express from 'express';

const router = express.Router();

router.get('*', (req, res) => {
  res.render('index', { test: process.env.MYPAGE_TEST});
});
export default router;
