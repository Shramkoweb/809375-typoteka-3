"use strict";

const {Router} = require(`express`);

const rootRouter = new Router();

rootRouter.get(`/`, (req, res) => res.send(`/`));
rootRouter.get(`/categories`, (req, res) => res.send(`/search`));
rootRouter.get(`/login`, (req, res) => res.send(`/login`));
rootRouter.get(`/register`, (req, res) => res.send(`/register`));
rootRouter.get(`/search`, (req, res) => res.send(`/search`));

module.exports = rootRouter;
