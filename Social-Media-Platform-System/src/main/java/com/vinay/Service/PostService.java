package com.vinay.Service;

import java.util.List;

import com.vinay.dto.PostDto;

public interface PostService {

    /**
     * Creates a new post with the given data.
     *
     * @param postDto The DTO containing the data for the new post.
     * @return The newly created post.
     */
    PostDto createPost(PostDto postDto);

    /**
     * Retrieves the post with the given id.
     *
     * @param id The id of the post to retrieve.
     * @return The post with the given id.
     * @throws ResourseNotFoundException if the post with the given id doesn't exist.
     */
    PostDto getPostById(Long id) ;

    /**
     * Updates the post with the given id with the new content.
     *
     * @param id The id of the post to update.
     * @param postUpdateDto The DTO containing the new content for the post.
     * @return The updated post.
     * * @throws ResourseNotFoundException if the post with the given id doesn't exist.
     */
    PostDto updatePost(Long id, PostDto postUpdateDto) ;

    /**
     * Deletes the post with the given id.
     *
     * @param id The id of the post to delete.
     * @throws ResourseNotFoundException if the post with the given id doesn't exist.
     */
    void deletePost(Long id);

    /**
     * Increments the like count of the post with the given id.
     *
     * @param id The id of the post to like.
     * @return The updated post.
     * @throws ResourseNotFoundException if the post with the given id doesn't exist.
     */
    PostDto likePost(Long id) ;

    /**
     * Decrements the like count of the post with the given id.
     * The count should not go below 0.
     *
     * @param id The id of the post to unlike.
     * @return The updated post.
     * @throws ResourseNotFoundException if the post with the given id doesn't exist.
     */
    PostDto unlikePost(Long id);

    /**
     * Retrieves the total number of posts.
     *
     * @return The total number of posts.
     */
    Long getTotalPosts();

    /**
     * Retrieves the top 5 most liked posts.
     *
     * @return The top 5 most liked posts.
     */
    List<PostDto> getTopLikedPosts();
    
    
    /**
     * Retrieves all posts.
     *
     * @return The all  posts.
     */
    List<PostDto> getAllPosts();
}

