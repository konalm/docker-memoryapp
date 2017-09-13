    CREATE TABLE account (
      account_id int AUTO_INCREMENT, 
      first_name VARCHAR(100),
      last_name VARCHAR(100), 
      email VARCHAR(100), 
      password VARCHAR(255), 
      PRIMARY KEY(account_id) 
    );

    CREATE TABLE profile_pic (
      profile_pic_id int AUTO_INCREMENT,
      path VARCHAR(255),
      PRIMARY KEY(profile_pic_id) 
    );

    CREATE TABLE memory (
      memory_id int AUTO_INCREMENT, 
      photo_id int
      memory VARCHAR(255),
      PRIMARY KEY(account_id),

      CONSTRAINT fk_photo FOREIGN KEY (photo_id) 
        REFERENCES photo(photo_id) 
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );

    CREATE TABLE photo (
      photo_id int AUTO_INCREMENT, 
      account_id int,
      photo VARCHAR(100),
      PRIMARY KEY(photo_id),

      CONSTRAINT fk_account FOREIGN KEY (account_id)
        REFERENCES account(account_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
    );

