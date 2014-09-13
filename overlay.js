(function ($) {

    $.fn.overlay = function (options) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            headerText: "Header Section",
            content: "Content Section",
            closeBtn: true,
            overlayselector: ".overlay"
        }, options);

        var overlayDiv = $(settings.overlayselector).css({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            padding: 0,
            backgroundColor: '#fff'
        });

        //create div for header
        var header = $('<div class="overlayHeaderSection">' + settings.headerText + '</div>').css({
                fontSize: "18px",
                font: "bold",
                color: "#7D706C",
                backgroundColor: "#EEEEEE",
                width: "100%",
                height: "40px",  
                lineHeight: "40px",
                paddingLeft: "20px" 
        });

       


        //create div for hold the html
        var content = $('<div class="overlayContentSection"></div>').css({
            paddingTop: 15,
            paddingRight: 30,
            paddingBottom: 30,
            paddingLeft: 30
        }).html(settings.content);

        overlayDiv.append(header);

        if (settings.closeBtn) {
            //add the close button and bind event of close to it.
            var overlayClose = $('<span style="float: right">x</span>').css({
                marginRight: 15
            }).hover(function () {
                $(this).css({
                    cursor: "pointer"
                });
            }).click(function () {
                overlayDiv.fadeOut();
            });
            header.append(overlayClose);
        }

        overlayDiv.append(content);


        this.on("click", function () {
            overlayDiv.fadeIn();
        });

        return this;

    };

}(jQuery));