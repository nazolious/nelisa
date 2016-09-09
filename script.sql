-- you can drop tables
drop table if exists categories;

-- you can create tables in the script;
create table categories(
    id int primary key auto_increment,
    category name char(100) not null
);
