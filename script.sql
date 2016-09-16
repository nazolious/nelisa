use nelisa;

-- you can drop tables
drop table if exists categories;

-- you can create tables in the script;
create table categories(
    id int primary key auto_increment,
    category char(100) not null
);
drop table if exists products;
create table products (
    id int primary key auto_increment,
    product char(100) not null,
    category_id int,
    foreign key (category_id) references categories(id),
    CONSTRAINT uc_product UNIQUE (product)
);

-- you can write a select query to check for data in a table
-- select * from products;
