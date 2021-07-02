// Generated by Melange
'use strict';

var Tea_cmd = require("bucklescript-tea/./src-ocaml/tea_cmd.bs.js");
var Tea_sub = require("bucklescript-tea/./src-ocaml/tea_sub.bs.js");
var Tea_html = require("bucklescript-tea/./src-ocaml/tea_html.bs.js");
var Tea_debug = require("bucklescript-tea/./src-ocaml/tea_debug.bs.js");

function string_of_msg(param) {
  if (typeof param !== "number") {
    return "Set";
  }
  switch (param) {
    case /* Increment */0 :
        return "Increment";
    case /* Decrement */1 :
        return "Decrement";
    case /* Reset */2 :
        return "Reset";
    
  }
}

function init(param) {
  return [
          4,
          Tea_cmd.none
        ];
}

function subscriptions(param) {
  return Tea_sub.none;
}

function update(model, v) {
  if (typeof v !== "number") {
    return [
            v._0,
            Tea_cmd.none
          ];
  }
  switch (v) {
    case /* Increment */0 :
        return [
                model + 1 | 0,
                Tea_cmd.none
              ];
    case /* Decrement */1 :
        return [
                model - 1 | 0,
                Tea_cmd.none
              ];
    case /* Reset */2 :
        return [
                0,
                Tea_cmd.none
              ];
    
  }
}

function view_button(title, msg) {
  return Tea_html.button(undefined, undefined, {
              hd: Tea_html.onClick(msg),
              tl: /* [] */0
            }, {
              hd: Tea_html.text(title),
              tl: /* [] */0
            });
}

function view(model) {
  return Tea_html.div(undefined, undefined, /* [] */0, {
              hd: Tea_html.span(undefined, undefined, {
                    hd: Tea_html.style("text-weight", "bold"),
                    tl: /* [] */0
                  }, {
                    hd: Tea_html.text(String(model)),
                    tl: /* [] */0
                  }),
              tl: {
                hd: Tea_html.br(/* [] */0),
                tl: {
                  hd: view_button("Increment", model >= 3 ? /* Decrement */1 : /* Increment */0),
                  tl: {
                    hd: Tea_html.br(/* [] */0),
                    tl: {
                      hd: view_button("Decrement", /* Decrement */1),
                      tl: {
                        hd: Tea_html.br(/* [] */0),
                        tl: {
                          hd: view_button("Set to 42", /* Set */{
                                _0: 42
                              }),
                          tl: {
                            hd: Tea_html.br(/* [] */0),
                            tl: {
                              hd: model !== 0 ? view_button("Reset", /* Reset */2) : Tea_html.noNode,
                              tl: /* [] */0
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            });
}

function partial_arg_shutdown(_model) {
  return Tea_cmd.none;
}

var partial_arg = {
  init: init,
  update: update,
  view: view,
  subscriptions: subscriptions,
  shutdown: partial_arg_shutdown
};

function main(param, param$1) {
  return Tea_debug.program(partial_arg, string_of_msg, param, param$1);
}

exports.string_of_msg = string_of_msg;
exports.init = init;
exports.subscriptions = subscriptions;
exports.update = update;
exports.view_button = view_button;
exports.view = view;
exports.main = main;
/* Tea_html Not a pure module */
