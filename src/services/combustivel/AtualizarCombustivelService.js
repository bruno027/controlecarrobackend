"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtualizarCombustivelService = void 0;
// services/combustivel/AtualizarCombustivelService.ts
const prisma_1 = __importDefault(require("../../prisma"));
class AtualizarCombustivelService {
    execute({ id, km_inicial, km_final, carro_id, user_id, data, litros }) {
        return __awaiter(this, void 0, void 0, function* () {
            const combustivel = yield prisma_1.default.combustivel.update({
                where: {
                    id,
                },
                data: {
                    km_inicial,
                    km_final,
                    carro_id,
                    user_id,
                    data,
                    litros,
                },
            });
            return combustivel;
        });
    }
}
exports.AtualizarCombustivelService = AtualizarCombustivelService;
