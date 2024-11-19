export class Widget {
    constructor(button) {
        this.colapsElement = undefined;
        this.widgetBox = button.closest(".widget_box");
        this.buttonWidget = button;
        this.colapsStatus = false;
        this.text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente recusandae mollitia quod maxime distinctio, obcaecati incidunt, delectus labore cum aliquid beatae illum, temporibus fugiat? Soluta laboriosam sapiente alias itaque consequuntur?";

        this.textCreate()
        this.createColapsItem()
        
    }


    textCreate() {
        for(let i = 0; i < 10; i++) {
            this.text += "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente recusandae mollitia quod maxime distinctio, obcaecati incidunt, delectus labore cum aliquid beatae illum, temporibus fugiat? Soluta laboriosam sapiente alias itaque consequuntur?"
        }
    }

    createColapsItem() {
        this.colapsElement = document.createElement("div");
        this.colapsElement.classList.add("colaps_element");
        this.widgetBox.append(this.colapsElement);
        this.colapsElement.textContent = this.text;
        this.widgetBox.style.height = this.buttonWidget.offsetHeight + "px";
    }


    toogle() {
        if (this.colapsStatus) {
            this.widgetBox.style.height = this.buttonWidget.offsetHeight + "px";
            this.colapsStatus = false;
        } else {
            this.widgetBox.style.height = this.buttonWidget.offsetHeight + this.colapsElement.offsetHeight + 10 +"px";
            this.colapsStatus = true;
        }
    }

}