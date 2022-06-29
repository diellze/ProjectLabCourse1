namespace Football2.DataModel
{
    public class News
    {
        internal static List<News> news;

        public int Id { get; set; }

        public string Image { get; set; }

        public string Name { get; set; }

        public string Details { get; set; }
    }
}
