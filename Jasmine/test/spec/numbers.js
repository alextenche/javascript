/*globals define, describe, it, beforeEach*/
define(['numbers', 'events'], function(numbers, events){
	'use strict';

	describe('The numbers module', function(){
		describe('The add method', function(){
			// arrange
			var output;
			beforeEach(function(){
				this.numberInput1 = 1;
				this.numberInput2 = 2;
				this.stringInput1 = '1';
				this.stringInput2 = 'oops';
			});

			/*it('should accept one or more numerical arguments and return the sum of them', function(){
				// act
				output = numbers.add(this.numberInput1, this.numberInput2);

				// assert
				expect(output).toEqual(3);
				expect(output).not.toEqual(4);
			});

			it('should try to parse an integer when a string is passed to the method', function(){
				// act
				output = numbers.add(this.numberInput1, this.stringInput1);

				// assert
				expect(output).toEqual(2);
			});

			it('should ignore the argument if it is not a parseable string', function(){
				// act
				output = numbers.add(this.numberInput1, this.stringInput2);

				// assert
				expect(output).toEqual(1);
			});*/

			it('should publish an added event showing the operands passed to the method and the result', function(){
				//spyOn(events, 'publish').and.callThrough();
				//spyOn(events, 'publish').and.returnValue(false);
				//spyOn(events, 'publish').and.callFake(function(name, args){
				//	window.alert(name);
				//});
				spyOn(events, 'publish').and.throwError('oops');
				expect(function(){
					numbers.add(1,1);
				}).toThrowError('oops');

				numbers.add(this.numberInput1, this.numberInput2);

				expect(events.publish).toHaveBeenCalled();
				expect(events.publish).toHaveBeenCalledWith('added', {operands:[this.numberInput1, this.numberInput2], result: 3});
			});
		});
	});
});