import numpy as np

# a row vector in simple python
rowVector1 = [1, 2, 3, 4, 5]
print('a row vector in simple python:', rowVector1)

# a col vector in simple python
colVector1 = [[1], [2], [3], [4], [5]]
print('a col vector in simple python:', colVector1)

# a row vector in numpy
rowVector2 = np.array([[1, 2, 3, 4, 5]])
print('a row vector in numpy:', rowVector2)

# a col vector in numpy
colVector2 = np.array([[1], [2], [3], [4], [5]])
print('a col vector in numpy', colVector2)

# a row vector as transpose of col vector
rowVector3 = np.transpose(colVector2)
print('a row vector as transpose of col vector:', rowVector3)

# a col vector as transpose of row vector
colVector3 = np.transpose( rowVector2)
print('a col vector as transpose of row vector:', colVector3)



# some vector arithmetics
vec1 = np.array([2, 4, 6])
vec2 = np.array([1, 2, 3, 8, 9])
vec3= np.array([3, 5, 7])

addition = vec1 + vec3
# vec1 + vec2 will generate an error of incorrect dimension
print("+: ",addition)

subtraction = vec3 - vec1
# vec1 - vec2 will generate an error of incorrect dimension
print("-:", subtraction)

scalar_multiplication = 5 * vec2
print("scalar x: ", scalar_multiplication)

vector_multiplication = vec1 * vec3
# vec1 * vec2 will generate an error of incorrect dimension
print("vector x: ",  vector_multiplication)

division = vec1 / vec3
# vec1 / vec2 will generate an error of incorrect dimension
print("/:", division)


# co-ordinates:
print('(x, y): ', np.array([3, 5]))
print('(x, y, z): ', np.array([3, -5, -7]))
print('origin: ', np.array([0, 0]))
print('i - unit vector: ', np.array([1, 0]))
print('j - unit vector: ', np.array([0, 1]))

# dot product of vectors
dot_product = np.dot(vec1, vec3)
print('dot product, v1.v2: ', dot_product);

# scalar and vector projection
# from numpy import linalg as lng
magnitude = np.linalg.norm(vec2)
print('norm: ', magnitude)

projection_1 = (np.dot(vec1, vec3) / np.dot(vec3, vec3)) * vec3
print('projection of vec1 on vec3: ', projection_1)
projection_2 = (np.dot(vec1, vec3) / np.linalg.norm(vec3)**2) * vec3
print('projection of vec1 on vec3: ', projection_2)


# introduction to matrices:
matrix_A = np.array([[1, 2], [4, 5], [8, 9]])
print('a matrix-> A=\n', matrix_A)

# accessing an element
print('a12 = a[0][1]: ', matrix_A[0][1])

matrix_A_size = np.size(matrix_A)
print('elements in A: ', matrix_A_size)

matrix_A_dimension = np.shape(matrix_A)
print('dimension of A: ', matrix_A_dimension)

# types of matrices
print('zero matrix:\n', np.zeros((2,3)))
print('ones matrix:\n', np.ones((3,2)))

identity_matrix = np.identity(3, int)
print('identity matrix I:\n', identity_matrix)

diagonal_matrix = np.array([[6, 0, 0], [0, -11, 0], [0, 0, 23]])
print('diagonal matrix D:\n', diagonal_matrix);

lower_triangular = np.array([[1, 0, 0], [2, 3, 0], [4, 5, 6]])
print('lower triangular L: ',lower_triangular )

upper_triangular = np.array([[1, 2, 3], [0, 4, 5], [0, 0, 6]])
print('upper triangular U:\n',upper_triangular)