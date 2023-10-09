exports = {}

exports.linear = function(x)
    return @x
end function

// #region Sine

locals.pi = pi

exports.easeInSine = function(x)
    return 1 - cos((@x * @outer.pi) / 2)
end function

exports.easeOutSine = function(x)
    return sin((@x * @outer.pi) / 2)
end function

exports.easeInOutSine = function(x)
    return -(cos(@outer.pi * @x) - 1) / 2
end function

// #end region

// #region Quad

exports.easeInQuad = function(x)
    return @x ^ 2
end function

exports.easeOutQuad = function(x)
    return 1 - (1 - @x) ^ 2
end function

exports.easeInOutQuad = function(x)
    if @x < 0.5 then
        return 2 * @x ^ 2
    else
        return 1 - (-2 * @x + 2) ^ 2 / 2
    end if
end function

// #end region

// #region Cubic

exports.easeInCubic = function(x)
    return @x ^ 3
end function

exports.easeOutCubic = function(x)
    return 1 - (1 - @x) ^ 3
end function

exports.easeInOutCubic = function(x)
    if @x < 0.5 then
        return 4 * @x ^ 3
    else
        return 1 - (-2 * @x + 2) ^ 3 / 2
    end if
end function

// #end region

// #region Quart

exports.easeInQuart = function(x)
    return @x ^ 4
end function

exports.easeOutQuart = function(x)
    return 1 - (1 - @x) ^ 4
end function

exports.easeInOutQuart = function(x)
    if @x < 0.5 then
        return 8 * @x ^ 4
    else
        return 1 - (-2 * @x + 2) ^ 4 / 2
    end if
end function

// #end region

// #region Quint

exports.easeInQuint = function(x)
    return @x ^ 5
end function

exports.easeOutQuint = function(x)
    return 1 - (1 - @x) ^ 5
end function

exports.easeInOutQuint = function(x)
    if @x < 0.5 then
        return 16 * @x ^ 5
    else
        return 1 - (-2 * @x + 2) ^ 5 / 2
    end if
end function

// #end region

// #region Expo

exports.easeInExpo = function(x)
    if @x == 0 then
        return 0
    else
        return 2 ^ (10 * @x - 10)
    end if
end function

exports.easeOutExpo = function(x)
    if @x == 1 then
        return 1
    else
        return 1 - 2 ^ (-10 * @x)
    end if
end function

exports.easeInOutExpo = function(x)
    if @x == 0 then
        return 0
    else if @x == 1 then
        return 1
    else if @x < 0.5 then
        return 2 ^ (20 * @x - 10) / 2
    else
        return (2 - 2 ^ (-20 * @x + 10)) / 2
    end if
end function

// #end region

// #region Circ

exports.easeInCirc = function(x)
    return 1 - sqrt(1 - @x ^ 2)
end function

exports.easeOutCirc = function(x)
    return sqrt(1 - (@x - 1) ^ 2)
end function

exports.easeInOutCirc = function(x)
    if @x < 0.5 then
        return (1 - sqrt(1 - (2 * @x) ^ 2)) / 2
    else
        return (sqrt(1 - (-2 * @x + 2) ^ 2) + 1) / 2
    end if
end function

// #end region

// #region Back

c1 = 1.70158
c2 = c1 * 1.525
c3 = c1 + 1

exports.easeInBack = function(x)
    return @outer.c3 * @x ^ 3 - @outer.c1 * @x ^ 2
end function

exports.easeOutBack = function(x)
    return 1 + @outer.c3 * (@x - 1) ^ 3 + @outer.c1 * (@x - 1) ^ 2
end function

exports.easeInOutBack = function(x)
    if @x < 0.5 then
        return ((2 * @x) ^ 2 * ((@outer.c2 + 1) * 2 * @x - @outer.c2)) / 2
    else
        return ((2 * @x - 2) ^ 2 * ((@outer.c2 + 1) * (@x * 2 - 2) + @outer.c2) + 2) / 2
    end if
end function

// #end region

// #region Elastic

c4 = (2 * pi) / 3

exports.easeOutElastic = function(x)
    if @x == 0 then
        return 0
    else if @x == 1 then
        return 1
    else
        return (2 ^ (-10 * @x)) * sin((@x * 10 - 0.75) * @outer.c4) + 1
    end if
end function

exports.easeInElastic = function(x)
    if @x == 0 then
        return 0
    else if @x == 1 then
        return 1
    else
        return -(2 ^ (10 * @x - 10)) * sin((@x * 10 - 10.75) * @outer.c4)
    end if
end function

c5 = (2 * pi) / 4.5

exports.easeInOutElastic = function(x)
    if @x == 0 then
        return 0
    else if @x == 1 then
        return 1
    else if @x < 0.5 then
        return -(2 ^ (20 * @x - 10) * sin((20 * @x - 11.125) * @outer.c5)) / 2
    else
        return (2 ^ (-20 * @x + 10) * sin((20 * @x - 11.125) * @outer.c5)) / 2 + 1
    end if
end function

// #end region


// #region Bounce

n1 = 7.5625
d1 = 2.75

easeOutBounce = function(x)
    if @x < 1 / @outer.d1 then
        return @outer.n1 * @x * @x
    else if (@x < 2 / @outer.d1) then
        return @outer.n1 * ((@x - 1.5 / @outer.d1) ^ 2) + 0.75
    else if (@x < 2.5 / @outer.d1) then
        return @outer.n1 * ((@x - 2.25 / @outer.d1) ^ 2) + 0.9375
    else
        return @outer.n1 * ((@x - 2.625 / @outer.d1) ^ 2) + 0.984375
    end if
end function

exports.easeInBounce = function(x)
    return 1 - easeOutBounce(1 - @x)
end function

exports.easeOutBounce = @easeOutBounce

exports.easeInOutBounce = function(x)
    if @x < 0.5 then
        return (1 - easeOutBounce(1 - 2 * @x)) / 2
    else
        return (1 + easeOutBounce(2 * @x - 1)) / 2
    end if
end function

// #end region

exports._test = function
    import "json"
    import "qa"
    import "stringUtil"
    testData = json.parse(file.open("/easing-test-data.json").read)

    for type in testData.indexes
        points = testData[type]
        for point in points
            expected = point.y
            easingFunc = @exports[type]
            actual = easingFunc(point.x)
            qa.assert(
              abs(actual - expected) < 1e-6, // Small value to account for float errors
              "Easing function {name} produced an invalid value for x={x}{lb}Expected: {expected}{lb}Actual: {actual}".fill(
                {
                  "lb": char(10),
                  "name": type,
                  "x": point.x,
                  "expected": expected,
                  "actual": actual,
                }))
        end for
    end for
end function

return exports