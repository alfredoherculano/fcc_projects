'''code math (hopefully) solved, 
now I gotta deal with the weekday parameter'''


#def add_time(start_time, duration, weekday=False):
start_time = input('Enter start time: ')
duration = input('Enter duration: ')

start_time = start_time.split()
num_time = start_time[0].split(':')
start_hours = int(num_time[0])
start_minutes = int(num_time[1])

duration_hours = int(duration.split(':')[0])
duration_minutes = int(duration.split(':')[1])

shift = start_time[1]

total_minutes1 = (start_hours * 60) + start_minutes
total_minutes2 = (duration_hours * 60) + duration_minutes

final_hours = (total_minutes1 + total_minutes2) / 60
final_minutes = (final_hours % 1) * 60

if final_hours > 12:
	if shift == 'AM':
		shift = 'PM'
	else:
		shift = 'AM'

rest = 12 * (final_hours // 12)
if int(final_hours) == 12:
	final_hours = rest + (final_hours % 12)
else:
	final_hours = abs(rest - (rest + (final_hours % 12)))

if int(final_hours) == 0:
	final_hours += 12

final_minutes = '{:.2f}'.format(final_minutes)
if len(final_minutes) < 5:
	final_minutes = '0' + final_minutes
else:
	pass

final_time = str(final_hours).split('.')[0] + ':' + final_minutes.split('.')[0] + ' ' + shift

print(final_time)