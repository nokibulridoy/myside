new Vue({
    el: '#Vue_component_wrapper',
    data: {
        DataList: [],
        ProjectImages : [],
        contactForm : {
            name : '',
            email : '',
            subject : '',
            message : '',
        }
    },
    methods: {
        openProjectImage : function(image_array){
            this.ProjectImages = image_array;
        },
        getValue: function (tag_name) {
            if (this.DataList[tag_name] !== undefined) {
                return this.DataList[tag_name];
            }
        },
        imageUrl : function (image_folder, image) {
            if (image_folder && image) {
                return this.DataList.imageBasePath+image_folder+image;
            }
        },
        submitForm : function () {
            window.open('mailto:hasanmahmudul356@gmail.com?subject='+this.contactForm.subject+'&body='+this.contactForm.message+'&name='+this.contactForm.name);
        }
    },
    created() {
        this.DataList = data;
    }
});
