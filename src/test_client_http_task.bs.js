// Generated by Melange
'use strict';

var Tea_ex = require("bucklescript-tea/./src-ocaml/tea_ex.bs.js");
var Tea_cmd = require("bucklescript-tea/./src-ocaml/tea_cmd.bs.js");
var Tea_sub = require("bucklescript-tea/./src-ocaml/tea_sub.bs.js");
var Tea_html = require("bucklescript-tea/./src-ocaml/tea_html.bs.js");
var Tea_http = require("bucklescript-tea/./src-ocaml/tea_http.bs.js");
var Tea_task = require("bucklescript-tea/./src-ocaml/tea_task.bs.js");
var Tea_debug = require("bucklescript-tea/./src-ocaml/tea_debug.bs.js");

function gotResponse(param_0) {
  return /* GotResponse */{
          _0: param_0
        };
}

function update(model, param) {
  if (param) {
    return [
            param._0._0,
            Tea_cmd.none
          ];
  } else {
    return [
            model,
            Tea_task.attempt(gotResponse, Tea_task.andThen((function (param) {
                        return Tea_task.succeed("both saved");
                      }), Tea_task.andThen((function (res) {
                            return Tea_ex.LocalStorage.setItem("todo-2", res);
                          }), Tea_task.andThen((function (param) {
                                return Tea_task.mapError(Tea_http.string_of_error, Tea_http.toTask(Tea_http.getString("https://jsonplaceholder.typicode.com/todos/2")));
                              }), Tea_task.andThen((function (res) {
                                    return Tea_ex.LocalStorage.setItem("todo-1", res);
                                  }), Tea_task.mapError(Tea_http.string_of_error, Tea_http.toTask(Tea_http.getString("https://jsonplaceholder.typicode.com/todos/1"))))))))
          ];
  }
}

function view(model) {
  return Tea_html.div(undefined, undefined, /* [] */0, {
              hd: Tea_html.button(undefined, undefined, {
                    hd: Tea_html.onClick(/* Req */0),
                    tl: /* [] */0
                  }, {
                    hd: Tea_html.text("execute"),
                    tl: /* [] */0
                  }),
              tl: {
                hd: Tea_html.text(model),
                tl: /* [] */0
              }
            });
}

function som(param) {
  if (param) {
    if (param._0.TAG === /* Ok */0) {
      return "GotResponse Ok";
    } else {
      return "GotResponse Error";
    }
  } else {
    return "Req";
  }
}

function partial_arg_init(param) {
  return [
          "nothing",
          Tea_cmd.none
        ];
}

function partial_arg_subscriptions(param) {
  return Tea_sub.none;
}

var partial_arg = {
  init: partial_arg_init,
  update: update,
  view: view,
  subscriptions: partial_arg_subscriptions
};

function main(param, param$1) {
  return Tea_debug.standardProgram(partial_arg, som, param, param$1);
}

var req = /* Req */0;

exports.gotResponse = gotResponse;
exports.req = req;
exports.update = update;
exports.view = view;
exports.som = som;
exports.main = main;
/* Tea_ex Not a pure module */