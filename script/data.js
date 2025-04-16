const person = {
    namn: "Anna",
    ålder: 25,
    hälsa: function () {
        console.log("Hej!");
    }
};


const map = [

    
    {
        block: 1.3,
        typ: 2,
        doors: { 3: 1.4, 4: 2.3}
    },
    
    {
        block: 1.4,
        typ: 1,
        doors: {1: 1.3},
        object: 14,
        objectLocation: 2
    },

    
    
    {
        block: 2.3,
        typ: 2,
        doors: { 2: 1.3, 4: 3.3},
        object: 1,
        objectLocation: 1
    },


    
    
    {
        block: 3.1,
        typ: 2,
        doors: { 3: 3.2, 4: 4.1}
    },
    
    {
        block: 3.2,
        typ: 2,
        doors: { 1: 3.1, 3: 3.3},
        object: 1,
        objectLocation: 2
    },
    
    {
        block: 3.3,
        typ: 3,
        doors: { 1: 3.2, 2: 2.3, 3: 3.4}
    },
    
    {
        block: 3.4,
        typ: 2,
        doors: { 1: 3.3, 4: 4.4}
    },
    
    {
        block: 3.12,
        typ: 1,
        doors: {4: 4.12},
        object: 13,
        objectLocation: 2
    },


    {
        block: 4.1,
        typ: 2,
        doors: { 2: 3.1, 4: 5.1},
        object: 1,
        objectLocation: 3
    },
    
    {
        block: 4.4,
        typ: 2,
        doors: {2: 3.4, 4: 5.4,},
        object: 1,
        objectLocation: 1
    },
    
    {
        block: 4.12,
        typ: 2,
        doors: { 2: 3.12, 4: 5.12}
    },

    
    
    {
        block: 5.1,
        typ: 3,
        doors: { 2: 4.1, 3: 5.2, 4: 6.1},
        object: 11,
        objectLocation: 1
    },
    
    {
        block: 5.2,
        typ: 2,
        doors: { 1: 5.1,  3: 5.3},
        object: 1,
        objectLocation: 4
    },
    
    {
        block: 5.3,
        typ: 2,
        doors: { 1: 5.2, 3: 5.4},
        object: 1,
        objectLocation: 2
    },
    
    {
        block: 5.4,
        typ: 3,
        doors: { 1: 5.3, 2: 4.4, 4: 6.4}
    },
    
    {
        block: 5.12,
        typ: 2,
        doors: { 2: 4.12, 4: 6.12},
        object: 1,
        objectLocation: 1
    },

    
    
    {
        block: 6.1,
        typ: 2,
        doors: { 2: 5.1, 4: 7.1},
        object: 1,
        objectLocation: 3
    },
    
    {
        block: 6.4,
        typ: 3,
        doors: { 2: 5.4, 3: 6.5, 4: 7.4},
        object: 9,
        objectLocation: 1
    },
    
    {
        block: 6.5,
        typ: 2,
        doors: { 1: 6.4, 3: 6.6},
        object: 1,
        objectLocation: 2
    },
    
    {
        block: 6.6,
        typ: 2,
        doors: { 1: 6.5, 4: 7.6}
    },
    
    {
        block: 6.12,
        typ: 2,
        doors: { 2: 5.12, 4: 7.12}
    },
    

    {
        block: 7.1,
        typ: 2,
        doors: { 2: 6.1 , 3: 7.2}
    },    

    {
        block: 7.2,
        typ: 2,
        doors: { 1: 7.1, 3: 7.3 },
        object: 1,
        objectLocation: 4
    },    

    {
        block: 7.3,
        typ: 2,
        doors: { 1: 7.2, 3: 7.4 }
    },    

    {
        block: 7.4,
        typ: 2,
        doors: { 1: 7.3, 2: 6.4},
        object: 1,
        objectLocation: 4
    },    

    {
        block: 7.6,
        typ: 3,
        doors: { 2: 6.6 , 3: 7.7 , 4: 8.6},
        object: 8,
        objectLocation: 1
    },    

    {
        block: 7.7,
        typ: 2,
        doors: { 1: 7.6,  3: 7.8 }
    },    

    {
        block: 7.8,
        typ: 3,
        doors: { 1: 7.7, 3:7.9, 4: 8.8},
        object: 7,
        objectLocation: 2
    },    

    {
        block: 7.9,
        typ: 2,
        doors: { 1: 7.8, 3: 7.11 }
    },    

    {
        block: 7.11,
        typ: 2,
        doors: { 1: 7.9,  3: 7.12  },
        object: 1,
        objectLocation: 2
    },    

    {
        block: 7.12,
        typ: 3,
        doors: { 1: 7.11 , 2: 6.12 , 3: 7.13  }
    },    

    {
        block: 7.13,
        typ: 2,
        doors: { 1: 7.12,  4: 8.13 },
        object: 1,
        objectLocation: 2
    },


    {
        block: 8.6,
        typ: 2,
        doors: { 2: 7.6, 4: 9.6 }
    },

    {
        block: 8.8,
        typ: 2,
        doors: { 2: 7.8 , 4: 9.8 }
    },

    {
        block: 8.13,
        typ: 2,
        doors: { 2: 7.13,  4: 9.13 }
    },
    

    {
        block: 9.6,
        typ: 2,
        doors: { 2: 8.6, 3: 9.7},
        object: 1,
        objectLocation: 1
    },    

    {
        block: 9.7,
        typ: 2,
        doors: { 1: 9.6, 3: 9.8 }
    },    

    {
        block: 9.8,
        typ: 4,
        doors: { 1: 9.7, 2: 8.8, 3: 9.9, 4: 10.8 }
    },    

    {
        block: 9.9,
        typ: 2,
        doors: { 1: 9.8,  3: 9.11 }
    },    

    {
        block: 9.11,
        typ: 2,
        doors: { 1: 9.9, 3: 9.12 },
        object: 1,
        objectLocation: 4
    },    

    {
        block: 9.12,
        typ: 2,
        doors: { 1: 9.11,  3: 9.13 }
    },    

    {
        block: 9.13,
        typ: 2,
        doors: { 1: 9.12, 2: 8.13 },
        object: 1,
        objectLocation: 3
    },
        

    {
        block: 10.3,
        typ: 1,
        doors: { 3: 10.4},
        object: 13,
        objectLocation: 1
    },

    {
        block: 10.4,
        typ: 2,
        doors: { 1: 10.3, 3: 10.5}
    },

    {
        block: 10.5,
        typ: 2,
        doors: { 1: 10.4, 4: 11.5},
        object: 1,
        objectLocation: 2
    },

    {
        block: 10.8,
        typ: 2,
        doors: { 2: 9.8, 4: 11.8 },
        object: 1,
        objectLocation: 3
    },

    {
        block: 11.5,
        typ: 2,
        doors: { 2: 10.5, 4: 12.5}
    },
            

    {
        block: 11.8,
        typ: 2,
        doors: {  2: 10.8 , 4: 12.8 },
        object: 1,
        objectLocation: 1
    },



    
    {
        block: 12.5,
        typ: 2,
        doors: { 2: 11.5, 3: 12.6},
        object: 1,
        objectLocation: 4
    },

    {
        block: 12.6,
        typ: 3,
        doors: { 1: 12.5, 3: 12.7, 4: 13.6},
        object: 2,
        objectLocation: 2
    },      

    {
        block: 12.7,
        typ: 2,
        doors: { 1: 12.6,  3:12.8}
    },        

    {
        block: 12.8,
        typ: 3,
        doors: { 1: 12.7, 2: 11.8 , 3: 12.9},
        object: 1,
        objectLocation: 4
    },        

    {
        block: 12.9,
        typ: 2,
        doors: { 1: 12.8 , 4: 13.9},
        object: 3,
        objectLocation: 2
    },


    
    {
        block: 13.2,
        typ: 1,
        doors: { 3: 13.3  },
        object: 13,
        objectLocation: 1
    },      
    
    {
        block: 13.3,
        typ: 2,
        doors: { 1: 13.2 , 4: 14.3  },
        object: 1,
        objectLocation: 3
    },     
    
    {
        block: 13.6,
        typ: 2,
        doors: { 2: 12.6, 4: 14.6  },
        object: 1,
        objectLocation: 1
    },     
    
    {
        block: 13.9,
        typ: 2,
        doors: {  2: 12.9 , 4: 14.9  }
        ,
        object: 1,
        objectLocation: 3
    }, 

        
    
    {
        block: 14.3,
        typ: 2,
        doors: { 2: 13.3, 4: 15.3  }
    },     
    
    {
        block: 14.6,
        typ: 2,
        doors: { 2: 13.6, 4: 15.6  }
    },     
    
    {
        block: 14.9,
        typ: 2,
        doors: {  2: 13.9, 4: 15.9  }
    }, 

        
    
    {
        block: 15.3,
        typ: 3,
        doors: { 2: 14.3, 3: 15.4, 4: 16.3  },
        object: 1,
        objectLocation: 1
    }, 
            
    
    {
        block: 15.4,
        typ: 2,
        doors: { 1: 15.3, 3: 15.5  },
        object: 1,
        objectLocation: 2
    }, 

            
    
    {
        block: 15.5,
        typ: 2,
        doors: { 1: 15.4, 3: 15.6  },
        object: 1,
        objectLocation: 4
    }, 

            
    
    {
        block: 15.6,
        typ: 3,
        doors: { 1: 15.5, 2: 14.6 , 4: 16.6  },
        object: 1,
        objectLocation: 3
        
    }, 

            
    
    {
        block: 15.9,
        typ: 3,
        doors: { 2: 14.9, 3: 15.11 , 4: 16.9  },
        object: 1,
        objectLocation: 1
    }, 

            
    
    {
        block: 15.11,
        typ: 2,
        doors: { 1: 15.9, 3: 15.12  }
    }, 

            
    
    {
        block: 15.12,
        typ: 2,
        doors: { 1: 15.11 , 3: 15.13   },
        object: 1,
        objectLocation: 4
    }, 

            
    
    {
        block: 15.13,
        typ: 2,
        doors: { 1: 15.12, 4: 16.13 }
    },         
    

    {
        block: 16.3,
        typ: 2,
        doors: { 2: 15.3, 4: 17.3  },
        object: 1,
        objectLocation: 3
    },     
    
    {
        block: 16.6,
        typ: 2,
        doors: { 2: 15.6,  4: 17.6  }
    },     
    
    {
        block: 16.9,
        typ: 2,
        doors: {  2: 15.9, 4: 17.9  }
    },     
    
    {
        block: 16.13,
        typ: 1,
        doors: { 2: 15.13 },
        object: 13,
        objectLocation: 4
    },     
    
    
    {
        block: 17.3,
        typ: 3,
        doors: { 2: 16.3, 3: 17.4 , 4: 18.3  },
        object: 6,
        objectLocation: 1
    },     
    
    {
        block: 17.4,
        typ: 2,
        doors: { 1: 17.3, 3: 17.5 },
        object: 1,
        objectLocation: 4
    }, 
    
    
    {
        block: 17.5,
        typ: 3,
        doors: { 1: 17.4,  3: 17.6 , 4: 18.5  }
    }, 
    
    
    {
        block: 17.6,
        typ: 3,
        doors: { 1: 17.5, 2: 16.6 , 3: 17.7  },
        object: 5,
        objectLocation: 4
    }, 
    
    
    {
        block: 17.7,
        typ: 3,
        doors: { 1: 17.6,  3: 17.8 , 4: 18.7  },
        object: 1,
        objectLocation: 2
    }, 
    
    
    {
        block: 17.8,
        typ: 2,
        doors: { 1: 17.7,  3: 17.9   }
    }, 
    
    
    {
        block: 17.9,
        typ: 3,
        doors: { 1: 17.8, 2: 16.9, 4: 18.9 },
        object: 4,
        objectLocation: 3
    },     
    

    {
        block: 18.3,
        typ: 2,
        doors: { 2: 17.3, 4: 19.3  },
        object: 1,
        objectLocation: 3
    }, 

    {
        block: 18.5,
        typ: 2,
        doors: {  2: 17.5 ,  4: 19.5  },
        object: 1,
        objectLocation: 1
    }, 

    {
        block: 18.7,
        typ: 2,
        doors: { 2: 17.7,  4: 19.7  }
    }, 

    {
        block: 18.9,
        typ: 2,
        doors: { 2: 17.9,  4: 19.9  }
    }, 
    


    {
        block: 19.3,
        typ: 2,
        doors: { 2: 18.3, 3: 19.4   }
    }, 
    
    {
        block: 19.4,
        typ: 2,
        doors: { 1: 19.3, 3: 19.5   },
        object: 1,
        objectLocation: 2
    }, 
    
    {
        block: 19.5,
        typ: 2,
        doors: { 1: 19.4, 2: 18.5  }
    }, 
    
    {
        block: 19.7,
        typ: 2,
        doors: { 2: 18.7, 3: 19.8  },
        object: 1,
        objectLocation: 1
    }, 
    
    {
        block: 19.8,
        typ: 2,
        doors: { 1: 19.7,  3: 19.9  }
    }, 
    
    {
        block: 19.9,
        typ: 3,
        doors: { 1: 19.8, 2: 18.9 , 3: 19.11  },
        object: 1,
        objectLocation: 4
    }, 
    
    {
        block: 19.11,
        typ: 2,
        doors: { 1: 19.9, 3: 19.12 }
    }, 
    
    {
        block: 19.12,
        typ: 2,
        doors: { 1: 19.11,  4: 20.12  },
        object: 1,
        objectLocation: 3
    }, 
    
    
    {
        block: 20.12,
        typ: 1,
        doors: { 2: 19.12 },
        object: 1,
        objectLocation: 4
    }, 
]




export {map};