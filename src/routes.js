"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const CriarCarroController_1 = require("./controller/carro/CriarCarroController");
const BuscarCarroController_1 = require("./controller/carro/BuscarCarroController");
const AtualizarCarroController_1 = require("./controller/carro/AtualizarCarroController");
const DeletarCarroController_1 = require("./controller/carro/DeletarCarroController");
const CriarCategoriaDespesaController_1 = require("./controller/categoria_despesa/CriarCategoriaDespesaController");
const AtualizarCategoriaDespesaController_1 = require("./controller/categoria_despesa/AtualizarCategoriaDespesaController");
const DeletarCategoriaDespesaController_1 = require("./controller/categoria_despesa/DeletarCategoriaDespesaController");
const CriarDespesaController_1 = require("./controller/despesa/CriarDespesaController");
const BuscarDespesaController_1 = require("./controller/despesa/BuscarDespesaController");
const AtualizarDespesaController_1 = require("./controller/despesa/AtualizarDespesaController");
const DeletarDespesaController_1 = require("./controller/despesa/DeletarDespesaController");
const CriarCombustivelController_1 = require("./controller/combustivel/CriarCombustivelController");
const BuscarCombustivelController_1 = require("./controller/combustivel/BuscarCombustivelController");
const AtualizarCombustivelController_1 = require("./controller/combustivel/AtualizarCombustivelController");
const DeletarCombustivelController_1 = require("./controller/combustivel/DeletarCombustivelController");
const CriarUserController_1 = require("./controller/user/CriarUserController");
const BuscarUserController_1 = require("./controller/user/BuscarUserController");
const AtualizarUserController_1 = require("./controller/user/AtualizarUserController");
const TodosCarroController_1 = require("./controller/carro/TodosCarroController");
const TodosCombustivelController_1 = require("./controller/combustivel/TodosCombustivelController");
const TodasCategoriaDespesaController_1 = require("./controller/categoria_despesa/TodasCategoriaDespesaController");
const TodasDespesaController_1 = require("./controller/despesa/TodasDespesaController");
const FiltroDespesaController_1 = require("./controller/despesa/FiltroDespesaController");
const FiltroCombustivelController_1 = require("./controller/combustivel/FiltroCombustivelController");
const FiltroTotalPorPlacaController_1 = require("./controller/despesa/FiltroTotalPorPlacaController");
const FiltroTotalPorCategoriaController_1 = require("./controller/despesa/FiltroTotalPorCategoriaController");
const BuscarDespesaPorCarroController_1 = require("./controller/despesa/BuscarDespesaPorCarroController");
const TotalPorMesController_1 = require("./controller/despesa/TotalPorMesController");
const EntrarUserController_1 = require("./controller/user/EntrarUserController");
const isAuthenticate_1 = require("./middlewares/isAuthenticate");
const routes = (0, express_1.Router)();
exports.routes = routes;
// Rotas para a tabela "Carro"
routes.post("/carros", isAuthenticate_1.isAuthenticate, new CriarCarroController_1.CriarCarroController().handle);
routes.get("/carros/:id", isAuthenticate_1.isAuthenticate, new BuscarCarroController_1.BuscarCarroController().handle);
routes.put("/carros/:id", isAuthenticate_1.isAuthenticate, new AtualizarCarroController_1.AtualizarCarroController().handle);
routes.delete("/carros/:id", isAuthenticate_1.isAuthenticate, new DeletarCarroController_1.DeletarCarroController().handle);
routes.get("/api/carro", isAuthenticate_1.isAuthenticate, new TodosCarroController_1.TodosCarroController().handle);
// Rotas para a tabela "Categoria_despesa"
routes.post("/categoriasdespesa", isAuthenticate_1.isAuthenticate, new CriarCategoriaDespesaController_1.CriarCategoriaDespesaController().handle);
//routes.get("/categoriasdespesa/:id", new BuscarCategoriaDespesaController().handle);
routes.put("/categoriasdespesa/:id", isAuthenticate_1.isAuthenticate, new AtualizarCategoriaDespesaController_1.AtualizarCategoriaDespesaController().handle);
routes.delete("/categoriasdespesa/:id", isAuthenticate_1.isAuthenticate, new DeletarCategoriaDespesaController_1.DeletarCategoriaDespesaController().handle);
routes.get("/categoriasdespesa/todas", isAuthenticate_1.isAuthenticate, new TodasCategoriaDespesaController_1.TodasCategoriaDespesaController().handle);
// Rotas para a tabela "Despesa"
routes.post("/despesa", isAuthenticate_1.isAuthenticate, new CriarDespesaController_1.CriarDespesaController().handle);
routes.get("/despesas/:id", isAuthenticate_1.isAuthenticate, new BuscarDespesaController_1.BuscarDespesaController().handle);
routes.put("/despesa/:id", isAuthenticate_1.isAuthenticate, new AtualizarDespesaController_1.AtualizarDespesaController().handle);
routes.delete("/despesa/:id", isAuthenticate_1.isAuthenticate, new DeletarDespesaController_1.DeletarDespesaController().handle);
routes.get("/api/despesa/todas", isAuthenticate_1.isAuthenticate, new TodasDespesaController_1.TodasDespesaController().handle);
routes.get("/api/despesa/filtro", isAuthenticate_1.isAuthenticate, new FiltroDespesaController_1.FiltroDespesaController().handle);
routes.get("/api/despesa/carro/total", isAuthenticate_1.isAuthenticate, new FiltroTotalPorPlacaController_1.FiltroTotalPorPlacaController().handle);
routes.get("/api/despesa/categoria/total", isAuthenticate_1.isAuthenticate, new FiltroTotalPorCategoriaController_1.FiltroTotalPorCategoriaController().handle);
routes.get("/api/despesa/carro", isAuthenticate_1.isAuthenticate, new BuscarDespesaPorCarroController_1.BuscarDespesaPorCarroController().handle);
routes.get("/api/despesas/mes", isAuthenticate_1.isAuthenticate, new TotalPorMesController_1.TotalPorMesController().handle);
// Rotas para a tabela "Combustivel"
routes.post("/combustivel", isAuthenticate_1.isAuthenticate, new CriarCombustivelController_1.CriarCombustivelController().handle);
routes.get("/combustiveis/:id", isAuthenticate_1.isAuthenticate, new BuscarCombustivelController_1.BuscarCombustivelController().handle);
routes.put("/combustivel/:id", isAuthenticate_1.isAuthenticate, new AtualizarCombustivelController_1.AtualizarCombustivelController().handle);
routes.delete("/combustivel/:id", isAuthenticate_1.isAuthenticate, new DeletarCombustivelController_1.DeletarCombustivelController().handle);
routes.get("/combustivel/todos", isAuthenticate_1.isAuthenticate, new TodosCombustivelController_1.TodosCombustivelController().handle);
routes.get("/combustivel/filtro", isAuthenticate_1.isAuthenticate, new FiltroCombustivelController_1.FiltroCombustivelController().handle);
// Rotas para a tabela "User"
routes.post("/usercbsa", new CriarUserController_1.CriarUserController().handle);
routes.get("/user/:id", isAuthenticate_1.isAuthenticate, new BuscarUserController_1.BuscarUserController().handle);
routes.put("/user/:id", isAuthenticate_1.isAuthenticate, new AtualizarUserController_1.AtualizarUserController().handle);
routes.post("/entrar", new EntrarUserController_1.EntrarUserController().handle);
