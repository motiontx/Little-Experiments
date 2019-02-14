const notes = {
  4: 32.7032, //   Do1    //
  5: 34.6479, //   Do#1   //
  6: 36.7081, //   Re1    //
  7: 38.8909, //   Re#1   //
  8: 41.2035, //   Mi1    //
  9: 43.6536, //   Fa1    //
  10: 46.2493, //   Fa#1   //
  11: 48.9995, //   Sol1   //
  12: 51.9130, //   Sol#1  //
  13: 55.0000, //   La1    //
  14: 58.2705, //   La#1   //
  15: 61.7354, //   Si1    //
  16: 65.4064, //   Do2    //
  17: 69.2957, //   Do#2   //
  18: 73.4162, //   Re2    //
  19: 77.7817, //   Re#2   //
  20: 82.4069, //   Mi2    //
  21: 87.3071, //   Fa2    //
  22: 92.4986, //   Fa#2   //
  23: 97.9989, //   Sol2   //
  24: 103.826, //   Sol#2  //
  25: 110.000, //   La2    //
  26: 116.541, //   La#2   //
  27: 123.471, //   Si2    //
  28: 130.813, //   Do3    //
  29: 138.591, //   Do#3   //
  30: 146.832, //   Re3    //
  31: 155.563, //   Re#3   //
  32: 164.814, //   Mi3    //
  33: 174.614, //   Fa3    //
  34: 184.997, //   Fa#3   //
  35: 195.998, //   Sol3   //
  36: 207.652, //   Sol#3  //
  37: 220.000, //   La3    //
  38: 233.082, //   La#3   //
  39: 246.942, //   Si3    //
  40: 261.626, //   Do4    //
  41: 277.183, //   Do#4   //
  42: 293.665, //   Re4    //
  43: 311.127, //   Re#4   //
  44: 329.628, //   Mi4    //
  45: 349.228, //   Fa4    //
  46: 369.994, //   Fa#4   //
  47: 391.995, //   Sol4   //
  48: 415.305, //   Sol#4  //
  49: 440.000, //   La4    //
  50: 466.164, //   La#4   //
  51: 493.883, //   Si4    //
  52: 523.251, //   Do5    //
  53: 554.365, //   Do#5   //
  54: 587.330, //   Re5    //
  55: 622.254, //   Re#5   //
  56: 659.255, //   Mi5    //
  57: 698.456, //   Fa5    //
  58: 739.989, //   Fa#5   //
  59: 783.991, //   Sol5   //
  60: 830.609, //   Sol#5  //
  61: 880.000, //   La5    //
  62: 932.328, //   La#5   //
  63: 987.767, //   Si5    //
  64: 1046.50, //   Do6    //
  65: 1108.73, //   Do#6   //
  66: 1174.66, //   Re6    //
  67: 1244.51, //   Re#6   //
  68: 1318.51, //   Mi6    //
  69: 1396.91, //   Fa6    //
  70: 1479.98, //   Fa#6   //
  71: 1567.98, //   Sol6   //
  72: 1661.22, //   Sol#6  //
  73: 1760.00, //   La6    //
  74: 1864.66, //   La#6   //
  75: 1975.53, //   Si6    //
  76: 2093.00, //   Do7    //
  77: 2217.46, //   Do#7   //
  78: 2349.32, //   Re7    //
  79: 2489.02, //   Re#7   //
  80: 2637.02, //   Mi7    //
  81: 2793.83, //   Fa7    //
  82: 2959.96, //   Fa#7   //
  83: 3135.96, //   Sol7   //
  84: 3322.44, //   Sol#7  //
  85: 3520.00, //   La7    //
  86: 3729.31, //   La#7   //
  87: 3951.07, //   Si7    //
}

const notesName = {
  "Do1" : 32.7032,
  "Do#1" : 34.6479,
  "Re1" : 36.7081,
  "Re#1" : 38.8909,
  "Mi1" : 41.2035,
  "Fa1" : 43.6536,
  "Fa#1" : 46.2493,
  "Sol1" : 48.9995,
  "Sol#1" : 51.9130,
  "La1" : 55.0000,
  "La#1" : 58.2705,
  "Si1" : 61.7354,
  "Do2" : 65.4064,
  "Do#2" : 69.2957,
  "Re2" : 73.4162,
  "Re#2" : 77.7817,
  "Mi2" : 82.4069,
  "Fa2" : 87.3071,
  "Fa#2" : 92.4986,
  "Sol2" : 97.9989,
  "Sol#2" : 103.826,
  "La2" : 110.000,
  "La#2" : 116.541,
  "Si2" : 123.471,
  "Do3" : 130.813,
  "Do#3" : 138.591,
  "Re3" : 146.832,
  "Re#3" : 155.563,
  "Mi3" : 164.814,
  "Fa3" : 174.614,
  "Fa#3" : 184.997,
  "Sol3" : 195.998,
  "Sol#3" : 207.652,
  "La3" : 220.000,
  "La#3" : 233.082,
  "Si3" : 246.942,
  "Do4" : 261.626,
  "Do#4" : 277.183,
  "Re4" : 293.665,
  "Re#4" : 311.127,
  "Mi4" : 329.628,
  "Fa4" : 349.228,
  "Fa#4" : 369.994,
  "Sol4" : 391.995,
  "Sol#4" : 415.305,
  "La4" : 440.000,
  "La#4" : 466.164,
  "Si4" : 493.883,
  "Do5" : 523.251,
  "Do#5" : 554.365,
  "Re5" : 587.330,
  "Re#5" : 622.254,
  "Mi5" : 659.255,
  "Fa5" : 698.456,
  "Fa#5" : 739.989,
  "Sol5" : 783.991,
  "Sol#5" : 830.609,
  "La5" : 880.000,
  "La#5" : 932.328,
  "Si5" : 987.767,
  "Do6" : 1046.50,
  "Do#6" : 1108.73,
  "Re6" : 1174.66,
  "Re#6" : 1244.51,
  "Mi6" : 1318.51,
  "Fa6" : 1396.91,
  "Fa#6" : 1479.98,
  "Sol6" : 1567.98,
  "Sol#6" : 1661.22,
  "La6" : 1760.00,
  "La#6" : 1864.66,
  "Si6" : 1975.53,
  "Do7" : 2093.00,
  "Do#7" : 2217.46,
  "Re7" : 2349.32,
  "Re#7" : 2489.02,
  "Mi7" : 2637.02,
  "Fa7" : 2793.83,
  "Fa#7" : 2959.96,
  "Sol7" : 3135.96,
  "Sol#7" : 3322.44,
  "La7" : 3520.00,
  "La#7" : 3729.31,
  "Si7" : 3951.07,
}
