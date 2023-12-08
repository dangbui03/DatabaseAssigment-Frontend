DELIMITER //

CREATE PROCEDURE GetAllMovies()
BEGIN
    SELECT * FROM movie;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetMovieById (IN movieId INT)
BEGIN
    SELECT *
    FROM movie
    WHERE ID = movieId;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetAllRooms()
BEGIN
    SELECT * FROM room;
END //

DELIMITER ;
#call GetAllMovies();

DELIMITER //
CREATE PROCEDURE GetRoomById (IN roomId char(4))
BEGIN
    SELECT *
    FROM room
    WHERE RNUMBER = roomId;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetAllMovieScreening()
BEGIN
    SELECT * FROM movieScreening;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE getAMovieScreening (
  IN inputId CHAR(9),
  IN inputRNumber CHAR(4),
  IN inputMovieTime DATETIME
)
BEGIN
    SELECT *
    FROM movieScreening
    WHERE ID = inputId AND RNUMBER = inputRNumber AND MOVIETIME = inputMovieTime;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetAllCustomer()
BEGIN
    SELECT * FROM customer;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE GetCustomerById(IN inputCustomerId char(9))
BEGIN
    SELECT * FROM customer WHERE CID = inputCustomerId;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE getAllTicketofMovie (
  IN inputId INT,
  IN inputRNumber CHAR(4),
  IN inputMovieTime DATETIME
)
BEGIN
    SELECT *
    FROM ticket
    WHERE ID = inputId AND RNUMBER = inputRNumber AND MOVIETIME = inputMovieTime;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE getTicketById (IN inputId char(9))
BEGIN
    SELECT *
    FROM ticket
    WHERE TID = inputId;
END //

DELIMITER ;

CREATE PROCEDURE UpdateTicket(IN inputTID CHAR(9), IN newPrice INT)
BEGIN
    UPDATE ticket
    SET T_PRICE = newPrice
    WHERE TID = inputTID;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE createBuyTicket(
    IN inputTID CHAR(9),
    IN inputID INT,
    IN inputRNUMBER CHAR(4),
    IN inputMOVIETIME DATETIME,
    IN inputCID CHAR(9)
)
BEGIN
    INSERT INTO buy_ticket (TID, ID, RNUMBER, MOVIETIME, CID)
    VALUES (inputTID, inputID, inputRNUMBER, inputMOVIETIME, inputCID);
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE UpdateMovieScreening(
    IN id_val INT,
    IN rnumber_val CHAR(4),
    IN movietime_val DATETIME,
    IN new_id_val INT,
    IN new_rnumber_val CHAR(4),
    IN new_movietime_val DATETIME
)
BEGIN
    UPDATE movieScreening
    SET 
        ID = new_id_val,
        RNUMBER = new_rnumber_val,
        MOVIETIME = new_movietime_val
    WHERE
        ID = id_val AND
        RNUMBER = rnumber_val AND
        MOVIETIME = movietime_val;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE DeleteMovieScreening(
    IN p_ID INT,
    IN p_RNUMBER CHAR(4),
    IN p_MOVIETIME DATETIME
)
BEGIN
    DELETE FROM movieScreening WHERE ID = p_ID AND RNUMBER = p_RNUMBER AND MOVIETIME = p_MOVIETIME;
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE CreateReview(
    IN p_CID CHAR(9),
    IN p_ID INT,
    IN p_T_TID CHAR(9),
    IN p_T_ID INT,
    IN p_T_RNUMBER CHAR(4),
    IN p_T_MOVIETIME DATETIME,
    IN p_E_POINT FLOAT(10, 2)
)
BEGIN
    INSERT IGNORE INTO review (CID, ID, T_TID, T_ID, T_RNUMBER, T_MOVIETIME, E_POINT)
    VALUES (p_CID, p_ID, p_T_TID, p_T_ID, p_T_RNUMBER, p_T_MOVIETIME, p_E_POINT);
END //

DELIMITER ;