(function($) {

    var form = $("#signup-form");
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
       }, "Value must not equal arg.");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
             element.before(error); 
        },
        rules: {
            first_name : {
                valueNotEquals: "default",
            },
            last_name : {
                required: true,
            },
            project_desc : {
                required: true,
            }
        },
        messages: {
            first_name : {
                valueNotEquals : "Please enter Category"
            },
            last_name : {
                required : "Please enter Project Tile"
            },
            project_desc : {
                required : "Please enter project describtion"
            }
        },
        onfocusout: function(element) {
            $(element).valid();
        },
        highlight : function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').addClass('form-error');
            $(element).removeClass('valid');
            $(element).addClass('error');
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).parent().parent().find('.form-group').removeClass('form-error');
            $(element).removeClass('error');
            $(element).addClass('valid');
        }
    });
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "fade",
        labels: {
            previous : 'Previous',
            next : 'Next',
            finish : 'Finish',
            current : ''
        },
        titleTemplate : '<h3 class="title">#title#</h3>',
        onInit : function (event, currentIndex) { 
            // Suppress (skip) "Warning" step if the user is old enough.
            if(currentIndex === 0) {
                form.find('.actions').addClass('test');
            }
        },
        onStepChanging: function (event, currentIndex, newIndex)
        {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert('Sumited');
        },
        onStepChanged: function (event, currentIndex, priorIndex)
        {

         
        }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        email: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });

    // $('#country').parent().append('<ul id="newcountry" class="select-list" name="country"></ul>');
    // $('#country option').each(function(){
    //     $('#newcountry').append('<li value="' + $(this).val() + '">'+$(this).text()+'</li>');
    // });
    // $('#country').remove();
    // $('#newcountry').attr('id', 'country');
    // $('#country li').first().addClass('init');
    // $("#country").on("click", ".init", function() {
    //     $(this).closest("#country").children('li:not(.init)').toggle();
    // });
    
    // var allOptions = $("#country").children('li:not(.init)');
    // $("#country").on("click", "li:not(.init)", function() {
    //     allOptions.removeClass('selected');
    //     $(this).addClass('selected');
    //     $("#country").children('.init').html($(this).html());
    //     allOptions.toggle();
    // });

    // var inputs = document.querySelectorAll( '.inputfile' );
	// Array.prototype.forEach.call( inputs, function( input )
	// {
	// 	var label	 = input.nextElementSibling,
	// 		labelVal = label.innerHTML;

	// 	input.addEventListener( 'change', function( e )
	// 	{
	// 		var fileName = '';
	// 		if( this.files && this.files.length > 1 )
	// 			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
	// 		else
	// 			fileName = e.target.value.split( '\\' ).pop();

	// 		if( fileName )
	// 			label.querySelector( 'span' ).innerHTML = fileName;
	// 		else
	// 			label.innerHTML = labelVal;
	// 	});

	// 	// Firefox bug fix
	// 	input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
	// 	input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
    // });
    
    
})(jQuery);
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.inputValue')
                .attr('value', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
