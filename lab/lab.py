# def solve(list):
#     result = bytearray(INT_BYTES_LENGTH)
#
#     for elem in arr:
#         for i in range(INT_BYTES_LENGTH):
#             result[i] = (result[i] + (elem >> i & 1)) % 3
#
#     r = 0
#     for i in range(INT_BYTES_LENGTH):
#         if result[i] % 3 == 2:
#             r |= (result[i] >> 1) << i
#         else:
#             r |= result[i] << i
#
#     return r
#
#
# if __name__ == "__main__":
#     print(solve([1, 1, 1, 2]))
#     print(solve([1, 1, 1, 2, 2]))
#     print(solve([1, 1, 1, 2, 2, 2, 33, 33]))
