Position = Backbone.Model.extend({
  defaults: {
    left: 50,
    top: 50
  }
});

DraggableElementView = Backbone.View.extend({
  className: "draggable-element",

  events: {
    "drag" : "onDrag"
  },

  onDrag: function () {
    this.model.set(this.$el.position());
  },

  render: function () {
    this.$el.offset(this.model.attributes);
    this.$el.draggable();
    return this;
  }
});

ContainerView = Backbone.View.extend({
  el: "#container",

  initialize: function () {
    this.redBoxView = new DraggableElementView({model: new Position()});
    this.render();
  },

  render: function () {
    this.$el.append(this.redBoxView.render().$el);
    return this;
  }
});

$(document).ready(function() {
  view = new ContainerView();
});
