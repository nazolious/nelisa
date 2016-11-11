use nelisa;
set foreign_key_checks=0;
-- you can drop tables
drop table if exists categories;
drop table if exists products;
drop table if exists sales;
drop table if exists purchases;
set foreign_key_checks=1;
-- you can create tables in the script;
create table categories(
    id int primary key auto_increment,
    category char(100) not null,
    CONSTRAINT uc_category UNIQUE (category)

);

create table products (
    id int primary key auto_increment,
    product char(100) not null,
    category_id int,
    foreign key (category_id) references categories(id),
    CONSTRAINT uc_product UNIQUE (product)
);

create table sales (
    id int primary key auto_increment,
    date char(100) not null,
    qty int,
    salesPrice char(100) not null,
    product_id int,
    foreign key (product_id) references products(id)
    -- CONSTRAINT uc_id UNIQUE (id)
);
create table purchases (
    id int primary key auto_increment,
    date char(100) not null,
    qty int,
    cost char(100) not null,
    product_id int,
    foreign key (product_id) references products(id)
    -- CONSTRAINT uc_id UNIQUE (id)
);
create table users (
  id int primary key auto_increment,
  username char(100) not null,
  email char(100) not null,
  password char(100) not null
)
-- you can write a select query to check for data in a table
-- select * from products;
