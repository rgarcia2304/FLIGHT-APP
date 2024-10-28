using BookingApi.Models;
using BookingApi.Services;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

// Add services to the container.
var builder = WebApplication.CreateBuilder(args);

// Add CORS policy with correct origin
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000") // Updated to correct origin
                                .AllowAnyHeader()                   // Allow any header (optional)
                                .AllowAnyMethod();                  // Allow any method (optional)
                      });
});

builder.Services.Configure<BookingsDatabaseSettings>(
    builder.Configuration.GetSection("BookingsDatabase"));

builder.Services.AddSingleton<BookingService>();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Enable the CORS policy for all requests
app.UseCors(MyAllowSpecificOrigins);

app.MapControllers();

app.Run();
