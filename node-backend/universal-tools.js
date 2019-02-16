module.exports = {
    generateAlphanumericString: function(length, callback, letters = true, numbers = true) {
        generated_string = '';
        for (var i = 0; i < length; i++)
        {
            if (letters && numbers) {
                if (Math.random() < 0.5)
                    generated_string += String.fromCharCode(Math.random() * (58 - 48) + 48);
                else
                    generated_string += String.fromCharCode(Math.random() * (91 - 65) + 65);
            } else if (letters)
                generated_string += String.fromCharCode(Math.random() * (91 - 65) + 65);
            else if (numbers)
                generated_string += String.fromCharCode(Math.random() * (58 - 48) + 48);
        }
        callback(generated_string);
    },
};

