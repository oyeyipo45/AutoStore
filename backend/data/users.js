import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('Kolade11.', 10),
		isAdmin: true,
	},
	{
		name: 'John Doe',
		email: 'john@example.com',
		password: bcrypt.hashSync('Kolade11.', 10),
	},
	{
		name: 'Jane Doe',
		email: 'jane@example.com',
		password: bcrypt.hashSync('Kolade11.', 10),
	},
	{
		name: 'Dami Doe',
		email: 'Dami@example.com',
		password: bcrypt.hashSync('Kolade11.', 10),
	},
	{
		name: 'Fuunmi Doe',
		email: 'Fuunmi@example.com',
		password: bcrypt.hashSync('Kolade11.', 10),
	},
	{
		name: 'Gbemi Doe',
		email: 'Gbemi@example.com',
		password: bcrypt.hashSync('Kolade11.', 10),
	},
];

export default users;
