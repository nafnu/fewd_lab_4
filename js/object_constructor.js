var hotel = new Object();

hotel.name = 'Purple Rain';
hotel.rooms = 45;
hotel.booked = 24;
hotel.checkAvailablity = function(){
    return this.rooms - this.booked;
};

