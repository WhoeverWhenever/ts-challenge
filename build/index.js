var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { getAPIArray, updateObjectInArray } from "./updateObjectInArray.js";
var API_URL = "https://jsonplaceholder.typicode.com/posts";
var content = document.querySelector(".content");
var btnRender = document.querySelector(".control__btn-render");
var btnShowChanges = document.querySelector(".control__btn-change");
function getPosts(url) {
    return __awaiter(this, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url, { method: "GET" })];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res.json()];
            }
        });
    });
}
var renderPosts = function (promisePosts) { return __awaiter(void 0, void 0, void 0, function () {
    var posts, i, p;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, promisePosts];
            case 1:
                posts = _a.sent();
                if (Array.isArray(posts)) {
                    for (i = 0; i < posts.length; i++) {
                        p = document.createElement("p");
                        p.textContent = JSON.stringify(posts[i]);
                        content === null || content === void 0 ? void 0 : content.append(p);
                    }
                }
                else {
                    throw new Error("Wrong data");
                }
                return [2 /*return*/];
        }
    });
}); };
btnRender === null || btnRender === void 0 ? void 0 : btnRender.addEventListener("click", function () { return renderPosts(getPosts(API_URL)); });
btnShowChanges === null || btnShowChanges === void 0 ? void 0 : btnShowChanges.addEventListener("click", function () { return __awaiter(void 0, void 0, void 0, function () {
    var initialArray, patch1, patch2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getAPIArray(getPosts(API_URL))];
            case 1:
                initialArray = _a.sent();
                return [4 /*yield*/, updateObjectInArray(initialArray, "id", 2, { title: "THERE'S VOMIT ON HIS SWEATER ALREADY, MOM'S SPAGHETTI" })];
            case 2:
                patch1 = _a.sent();
                return [4 /*yield*/, updateObjectInArray(patch1, "id", 5, { userId: 313, body: "Uh, summa-lumma, dooma-lumma, you assumin' I'm a human" })];
            case 3:
                patch2 = _a.sent();
                console.log(patch2);
                return [2 /*return*/];
        }
    });
}); });
