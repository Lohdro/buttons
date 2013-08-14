module.exports.register = register = function(Handlebars, options) {

  /**
   * Collapse multiple new lines into one.
   *
   * @param {none}
   * @example:
   *   {{#condense}}
   *     {{> body }}
   *   {{/condense}}
   */
  Handlebars.registerHelper('condense', function(context) {
    return context.fn(this).replace(/(\n|\r){2,}/g, '\n').replace(/(\s*<!--)/g, '\n$1');
  });
};