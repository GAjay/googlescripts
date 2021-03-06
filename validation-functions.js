$(document).ready(function() {
    $('#test-form').bootstrapValidator({
        //submitButtons: '#postForm',
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },        
        fields: {
            firstName: {
             message: 'The first name is not valid',
                validators: {
                    notEmpty: {
                        message: 'The first name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'The first name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'The first name can only accept alphabetical input'
                    },
                }
            },
            lastName: {
                message: 'Last Name is not valid',
                validators: {
                    notEmpty: {
                        message: 'Last Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 1,
                        max: 30,
                        message: 'Last Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-z]+$/,
                        message: 'Last Names can only consist of alphabetical characters'
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The email address is not a valid'
                    }
                }
            },
            address: {
                message: 'Address is not valid',
                validators: {
                    notEmpty: {
                        message: 'Address is required and cannot be empty'
                    }
                }
            }, 

        }
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        // Get the form instance
        var $form = $(e.target);
         var url = 'https://script.google.com/macros/s/AKfycbwIpGdPKqSeuEMdJJYUYbMuHz9zDGNI0jLjtZ3E37CyFsEq2EU/exec';
        var redirectUrl = 'success-page.html';
       
        var settings = {
          'cache': false,
          "async": true,
            "dataType": 'jsonp',
          "data":$form.serialize(),
          "crossDomain": true,
          "url":'https://script.google.com/macros/s/AKfycbwIpGdPKqSeuEMdJJYUYbMuHz9zDGNI0jLjtZ3E37CyFsEq2EU/exec',
          "method": 'post'
      }

        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');

        // Use Ajax to submit form data
        console.log();
        // show the loading 
        $('#postForm').prepend($('<span></span>').addClass('glyphicon glyphicon-refresh glyphicon-refresh-animate'));
       $.ajax(settings).done(function (response) {
          console.log(response);});
        });
});

