module.exports.Roles = {
	Member: 1,
	Exempt: 2,
	Mod: 4,
	Admin: 8,
	Developer: 16,
	ModPlus: this.Mod | this.Admin
}