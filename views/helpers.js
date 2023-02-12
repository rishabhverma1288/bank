module.exports = {
    getError(errors, prop) {
      try {
        return `<p class="red"> &nbsp; &nbsp;${errors.mapped()[prop].msg}<p>`
      } catch (err) {
        return '';
      }
    },
  
  };
  