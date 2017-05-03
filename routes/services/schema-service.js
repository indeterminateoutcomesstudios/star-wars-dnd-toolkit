var mongoose = require('mongoose');
var schema_url = 'mongodb://localhost:27017/ddtoolkit';
if (!mongoose.connection.db) {
  mongoose.connect(schema_url, function (err) {
    if (err) {
      console.log(JSON.stringify(err));
    } else {
      console.log('Connected: ' + schema_url);
    }
  });
}
var Schema = mongoose.Schema;

/* Planet Schema */
var planetSchema = new Schema({
  name: {
    type: String,
    index: {
      unique: true
    },
    required: true
  },
  region: {
    type: String,
    required: false
  },
  sector: {
    type: String,
    required: false
  },
  system: {
    type: String,
    required: false
  },
  capital: {
    type: String,
    required: false
  },
  inhabitants: {
    type: Object,
    required: false
  },
  climate: {
    type: String,
    required: false
  },
  coordinates: {
    type: String,
    required: false
  },
  hyperspace: {
    type: Object,
    required: false
  },
  alignment: {
    type: Object,
    required: false
  },
  active: {
    type: Boolean,
    required: true
  }
});
var Planet = mongoose.model('Planet', planetSchema);

var sceneSchema = new Schema({
  name: {
    type: String,
    index: {
      unique: true
    },
    required: true
  },
  description: {
    type: String,
    required: false
  },
  combatants: [{
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['Non-Player Character', 'Player Character'],
      required: true
    },
    hp: {
      type: Number,
      required: false
    },
    sp: {
      type: Number,
      required: false
    },
    initiative: {
      type: Number,
      required: false
    }
  }]
});
var Scene = mongoose.model('Scene', sceneSchema);

module.exports = {
  Planet: Planet,
  Scene: Scene
};
