using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BookingApi.Models;

public class Booking
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Name")]
    public string ConfirmationNumber { get; set; } = null!;

    public decimal Price { get; set; }

    public string Departure { get; set; } = null!;

    public string Destination { get; set; } = null!;
}

public class BookingsDatabaseSettings
{
    public string ConnectionString { get; set; } = null!;

    public string DatabaseName { get; set; } = null!;

    public string BookingCollectionName { get; set; } = null!;
}