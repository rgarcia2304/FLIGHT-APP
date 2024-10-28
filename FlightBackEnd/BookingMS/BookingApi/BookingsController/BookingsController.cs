using BookingApi.Models;
using BookingApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace BookingApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingController : ControllerBase
{
    private readonly BookingService _bookingService;

    public BookingController(BookingService bookingService) =>
        _bookingService = bookingService;

    [HttpGet]
    public async Task<List<Booking>> Get() =>
        await _bookingService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Booking>> Get(string id)
    {
        var booking = await _bookingService.GetAsync(id);

        if (booking is null)
        {
            return NotFound();
        }

        return booking;
    }

    [HttpPost]
    public async Task<IActionResult> Post(Booking newBooking)
    {
        await _bookingService.CreateAsync(newBooking);

        return CreatedAtAction(nameof(Get), new { id = newBooking.Id }, newBooking);
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Booking updatedBooking)
    {
        var book = await _bookingService.GetAsync(id);

        if (book is null)
        {
            return NotFound();
        }

        updatedBooking.Id = book.Id;

        await _bookingService.UpdateAsync(id, updatedBooking);

        return NoContent();
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var book = await _bookingService.GetAsync(id);

        if (book is null)
        {
            return NotFound();
        }

        await _bookingService.RemoveAsync(id);

        return NoContent();
    }
}