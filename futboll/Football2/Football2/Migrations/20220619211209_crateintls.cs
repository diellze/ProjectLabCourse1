using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Football2.Migrations
{
    public partial class crateintls : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Matches",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ekipi1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Ekipi2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    goalsTeam1 = table.Column<int>(type: "int", nullable: false),
                    goalsTeam2 = table.Column<int>(type: "int", nullable: false),
                    location = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Matches", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Matches");
        }
    }
}
